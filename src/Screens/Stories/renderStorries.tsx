import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStory} from '../../API/Stories/getStory';

type data = {
  title: string;
  type: string;
  by: string;
};

interface IRenderStorriesProps {
  id: number;
}

function RenderStorries({id}: IRenderStorriesProps) {
  const [data, setData] = useState<data>();
  const [loading, setLoading] = useState(Boolean);

  useEffect(() => {
    const fetchStoryData = async () => {
      setLoading(true);
      let story = await getStory(id);
      setData(story);
      setLoading(false);
    };
    fetchStoryData();
  }, [id]);

  return (
    <View style={style.parentContainer}>
      {loading ? (
        <View style={style.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <Text style={style.parentText}>
            <Text style={style.childText}>Title : </Text>
            {data?.title}
          </Text>
          <View style={style.mainContainer}>
            <Text style={style.parentText}>
              <Text style={style.childText}>Type : </Text>
              {data?.type}
            </Text>
            <Text style={style.parentText}>
              <Text style={style.childText}>By : </Text>
              {data?.by}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  parentContainer: {borderColor: '#000', borderWidth: 0.2, padding: 18},
  loaderContainer: {justifyContent: 'center', alignItems: 'center'},
  parentText: {fontSize: 16, lineHeight: 22},
  childText: {fontWeight: 'bold'},
  mainContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default React.memo(RenderStorries);
