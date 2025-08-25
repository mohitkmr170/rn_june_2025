import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {styles} from './styles';
import {Header} from '../../Components';

const ITEM_HEIGHT = 100;

export default function List() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://dummyjson.com/posts');
        const json = await res.json();
        setData(json?.posts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderPostItem = ({item}: any) => {
    return (
      <View style={styles.postListItemContainer}>
        <View>
          <Text style={styles.postListItemTitleText}>{item?.title}</Text>
          <Text style={styles.postListItemBodyText} numberOfLines={4}>
            {item?.body}
          </Text>
        </View>
        <View style={styles.tagContainer}>
          <Text>
            🌐{' '}
            {item?.tags.map((tagTtem: string) => (
              <Text>{tagTtem} </Text>
            ))}
          </Text>
        </View>
        <View style={styles.reactionsContainer}>
          <Text>👀 {item?.views}</Text>
          <View style={styles.reactionsInnerContainer}>
            <Text>👍 {item?.reactions?.likes}</Text>
            <Text style={styles.dislikeText}>
              👎 {item?.reactions?.dislikes}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.parentContainer}>
      <Header />
      <View style={styles.mainContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.postContainer}>
            <Text style={styles.postHeaderText}>Posts</Text>
            <FlatList
              data={data}
              renderItem={item => renderPostItem(item)}
              showsVerticalScrollIndicator={false}
              //provide a unique keyExtractor a function that returns a unique key for each item in the list. This helps React Native efficiently update and render items.
              keyExtractor={item => item?.id.toString()}
              //If dimensions are fixed and won't change dynamically, you can use the getItemLayout prop to optimize rendering by skipping the measurement of items.
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              //how many items are initially rendered
              initialNumToRender={10}
              // how many are rendered in each batch
              windowSize={5}
              //Setting removeClippedSubviews to true can help with performance by removing items that are outside the viewport.
              removeClippedSubviews={false}
              // The extraData prop is used to force re-render the FlatList. Avoid using it excessively, as it can trigger unnecessary re-renders. Instead, rely on React's state and props to trigger updates.
              //Avoid Heavy Operations in Render Functions => perform expensive calculations outside the rendering function and pass the result as props.
            />
          </View>
        )}
      </View>
    </View>
  );
}
