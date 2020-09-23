/* eslint-disable camelcase */
import React, { useCallback, useState, useMemo } from 'react';
import { isToday, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Link } from 'react-router-dom';

import { FiPower, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextActivitie,
  Section,
  Activitie,
} from './styles';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    user_avatar: string;
  };
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = useCallback((day: Date) => {
    console.log(day);
    setSelectedDate(day);
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  // useEffect - vai executar a funcao
  // useCallback - vai retornar uma funcao
  // useMemo - vai retornar um valor especifico, já calculado

  // memorizar um valor/formatacao especifico e dizer quando eu quero que seja recarregado

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <img src={user.user_avatar} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Atividades Disponibilizadas</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>
          <NextActivitie>
            <strong>Atividades próximas</strong>
            <div>
              <img src={user.user_avatar} alt={user.name} />

              <strong>ATIVIDADE 1</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextActivitie>

          <Section>
            <strong>Manhã</strong>
            {/* <p>Nenhuma atividade pendente neste período</p> */}
            <Activitie>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src={user.user_avatar} alt={user.name} />
                <strong>TESTE</strong>
              </div>
            </Activitie>
          </Section>
          <Section>
            <strong>Tarde</strong>
            {/* <p>Nenhuma atividade pendente neste período</p> */}
            <Activitie>
              <span>
                <FiClock />
                18:00
              </span>

              <div>
                <img src={user.user_avatar} alt={user.name} />
                <strong>TESTE</strong>
              </div>
            </Activitie>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onMonthChange={handleMonthChange}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
