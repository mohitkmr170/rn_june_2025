import {FlatList, Text, View} from 'react-native';
import {Header} from '../../Components';
import {styles} from './styles';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopStories} from '../../Store/Slices/stories';
import {Loader} from '../../Components/Loader';
import RenderStorries from './renderStorries';

const StoriesScreen = () => {
  const dispatch = useDispatch<any>();
  const {
    story: {stories},
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchTopStories());
  }, [dispatch]);

  const renderItem = useCallback(
    ({item}: {item: any}) => <RenderStorries id={item} />,
    [],
  );

  const keyExtractor = useCallback((id: number) => String(id), []);

  return (
    <View style={styles.parentContainer}>
      <Header />
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>StoriesScreen</Text>
        {stories?.loading ? (
          <Loader />
        ) : (
          <View>
            <FlatList
              data={stories?.data}
              renderItem={renderItem}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              windowSize={7}
              updateCellsBatchingPeriod={50}
              removeClippedSubviews
              keyExtractor={keyExtractor}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default StoriesScreen;
