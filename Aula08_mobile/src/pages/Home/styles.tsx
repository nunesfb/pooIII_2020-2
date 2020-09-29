import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ListEvents} from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #1c1c1c;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  line-height: 28px;
`;

export const CreateRoomButton = styled.TouchableOpacity``;

export const UserName = styled.Text`
  font-weight: bold;
`;

export const Events = styled(FlatList as new () => FlatList<ListEvents>)`
  padding: 32px 24px 16px;
`;

export const EventsListTitle = styled.Text`
  font-size: 24px;
  color: #363636;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const EventsContainer = styled(RectButton)`
  background: #363636;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const EventInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const EventName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #e8e8e8;
  text-transform: uppercase;
`;

export const EventMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const EventMetaText = styled.Text`
  margin-left: 8px;
  color: #b5b5b5;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`;

export const EventMetaLocation = styled.View`
  margin: 16px 0px 5px;
  padding: 6px;
  background: #1c1c1c;
  border-radius: 8px;
  flex-direction: column;
`;

export const Separator = styled.View`
  padding: 6px;
  background: #1c1c1c;
  border-radius: 8px;
  flex-direction: row;
  margin-left: 8px;
`;

export const EventMetaLocationText = styled.Text`
  margin-left: 8px;
  font-weight: bold;
  font-size: 14px;
  color: #999591;
  text-transform: capitalize;
`;
