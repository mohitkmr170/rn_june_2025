import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {flex: 1},
  mainContainer: {flex: 1, margin: 8},
  postContainer: {flex: 1},
  postHeaderText: {fontSize: 24, lineHeight: 28, textAlign: 'center'},
  postListItemContainer: {
    borderColor: 'black',
    borderWidth: 0.2,
    marginTop: 16,
    padding: 8,
    borderRadius: 8,
  },
  postListItemTitleText: {fontSize: 18, lineHeight: 22},
  postListItemBodyText: {marginTop: 8, fontSize: 12, lineHeight: 18},
  tagContainer: {marginVertical: 8},
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  reactionsInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dislikeText: {marginLeft: 8},
});
