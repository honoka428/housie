import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import {CalendarList} from 'react-native-calendars';

class CalendarScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
      <CalendarList
        pastScrollRange={4}
        futureScrollRange={4}
        scrollEnabled={true}
        showScrollIndicator={true}
        theme={{
          textSectionTitleDisabledColor: '#d9e1e8',
          todayTextColor: '#FAA465',
          monthTextColor: '#FAA465',
          textDayFontFamily: 'Montserrat-Regular',
          textMonthFontFamily: 'Montserrat-Bold',
          textDayHeaderFontFamily: 'Montserrat-Regular',
          textDayFontWeight: '300',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 12
        }}
      />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text: {
    textAlign: 'center',  
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
  },
})

export default CalendarScreen;