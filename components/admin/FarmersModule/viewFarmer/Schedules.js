import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import VetSchedule from '../../../ui/VetSchedule';

const Schedules = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Schedules</Text>
      <View style={styles.vetScheduleWrap}>
        <VetSchedule />
      </View>
      <View style={styles.vetScheduleWrap}>
        <VetSchedule />
      </View>
      <View style={styles.vetScheduleWrap}>
        <VetSchedule />
      </View>
    </View>
  );
};

export default Schedules;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    padding: 10,
  },
  vetScheduleWrap: {
    paddingVertical: 5,
  },
});

// import React from 'react';
// import { Text, View } from 'react-native';

// const Schedules = () => {
//   return (
//     <View>
//       <Text>Schedules</Text>
//     </View>
//   );
// };

// export default Schedules;
