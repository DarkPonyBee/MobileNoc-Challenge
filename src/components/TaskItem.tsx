import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {TASK_STATUS} from '../typings';
import {Colors} from 'src/constants';

interface Props {
  name: string;
  due_date: string;
  status: TASK_STATUS;
}

export const TaskItem: React.FC<Props> = ({name, due_date, status}) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setChecked(!checked)}
      activeOpacity={0.8}>
      <>
        <View style={styles.nameContainer}>
          <CheckBox boxType="square" style={styles.checkBox} value={checked} />
          {status === TASK_STATUS.DONE && (
            <MaterialIcons name="check-circle" size={20} color="green" />
          )}
          {status === TASK_STATUS.PROGRESS && (
            <EntypoIcons name="progress-one" size={20} color="blue" />
          )}
          {status === TASK_STATUS.PENDING && (
            <MaterialIcons name="pending" size={20} color="red" />
          )}
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <Text style={styles.dateText}>{due_date}</Text>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Colors.darkWhite,
    borderColor: Colors.aliceBlue,
    borderWidth: 1,
    borderRadius: 3,
    width: Dimensions.get('screen').width - 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    marginLeft: 5,
    color: Colors.darkPurple,
  },
  dateText: {
    color: Colors.darkBlue,
  },
  checkBox: {
    // width: 20,
    height: 20,
  },
});
