import React, {memo, useEffect, useCallback} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchListAsync} from 'src/actions/tasksActions';
import useSelector from '../utils/useSelector';
import {TaskItem, Divider} from '../components';
import {Colors} from '../constants';

function Home() {
  const dispatch = useDispatch();
  const userId = '5dfb8eab2f000056c4ffa05c';

  const tasks = useSelector((state) => state.tasks.tasks);
  const fetchList = useCallback(() => {
    dispatch(fetchListAsync.request(userId));
  }, [dispatch]);

  useEffect(() => {
    fetchList();
    const interval = setInterval(() => fetchList(), 60000);
    return () => clearInterval(interval);
  }, [fetchList]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tasks</Text>
      </View>
      {tasks && tasks.length > 0 && (
        <FlatList
          alwaysBounceVertical={false}
          data={tasks}
          renderItem={({item}) => (
            <TaskItem
              name={item.name}
              status={item.status}
              due_date={item.due_date}
              key={item.id}
            />
          )}
          ItemSeparatorComponent={Divider}
        />
      )}
    </SafeAreaView>
  );
}

export default memo(Home);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: Colors.darkCharcoal,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
  },
});
