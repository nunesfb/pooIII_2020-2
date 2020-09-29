import React, {useCallback, useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {
  Container,
  Header,
  HeaderTitle,
  CreateRoomButton,
  UserName,
  Events,
  EventsListTitle,
  EventsContainer,
  EventInfo,
  EventName,
  EventMeta,
  EventMetaText,
  EventMetaLocation,
  Separator,
  EventMetaLocationText,
} from './styles';

export interface ListEvents {
  id_event: number;
  name_event: string;
  description: string;
  date_time: Date;
  responsible: string;
  location: {
    building: string;
    room: string;
  }[];
}

const Home: React.FC = () => {
  const [events, setEvents] = useState<ListEvents[]>([]);
  const {navigate} = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const results = await api.get('events');
      setEvents(results.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const navigateToDeleteEvent = useCallback(
    (idEvent: string) => {
      navigate('DeleteEvent', {idEvent});
    },
    [navigate],
  );

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>Felipe Becker Nunes</UserName>
        </HeaderTitle>
      </Header>

      <Events
        data={events}
        keyExtractor={(event) => event.id_event.toString()}
        ListHeaderComponent={
          <EventsListTitle>Eventos Cadastrados</EventsListTitle>
        }
        renderItem={({item}) => (
          <EventsContainer
            onPress={() => {
              navigateToDeleteEvent(item.id_event.toString());
            }}>
            <EventInfo>
              <EventName>{item.name_event}</EventName>
              <EventMeta>
                <Icon name="event" size={20} color="#EEAD0E" />
                <EventMetaText>{item.name_event}</EventMetaText>
              </EventMeta>
              <EventMeta>
                <Icon name="update" size={20} color="#EEAD0E" />
                <EventMetaText>{item.date_time}</EventMetaText>
              </EventMeta>
              <EventMeta>
                <Icon name="textsms" size={20} color="#EEAD0E" />
                <EventMetaText>{item.description}</EventMetaText>
              </EventMeta>

              {item.location.map((location) => (
                <EventMetaLocation>
                  <Separator>
                    <Icon name="local-play" size={20} color="#EEAD0E" />
                    <EventMetaLocationText>
                      {location.building}
                    </EventMetaLocationText>
                  </Separator>

                  <Separator>
                    <Icon name="room" size={20} color="#EEAD0E" />
                    <EventMetaLocationText>
                      {location.room}
                    </EventMetaLocationText>
                  </Separator>
                </EventMetaLocation>
              ))}
            </EventInfo>
          </EventsContainer>
        )}
      />
    </Container>
  );
};
export default Home;
