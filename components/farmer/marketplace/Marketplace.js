import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import ShambaButton from '../../ui/ShambaButton';
import { Divider } from '@react-native-material/core';

const Marketplace = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    chipWrap: {
      flexDirection: 'row',
    },
    chip: {
      backgroundColor: theme.gray6,
      height: 25,
      borderRadius: 10,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 4,
      marginVertical: 2,
      flexDirection: 'row',
    },
    addChip: {
      borderWidth: 1,
      borderColor: theme.primary,
      borderStyle: 'solid',
    },
    chipText: {
      color: theme.inverted,
      fontSize: 17,
    },
    chipIcon: {
      marginHorizontal: 5,
    },
    chipCloseIcon: {
      color: theme.danger,
    },
    chipDropdownIcon: {
      color: theme.primary,
    },
    postCardsWrap: {
      padding: 10,
    },
    postCard: {
      backgroundColor: theme.wb_color1,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      borderBottomColor: theme.primary,
      borderBottomWidth: 1,
    },
    topRow: {
      flexDirection: 'row',
    },
    cardAvatar: {
      height: 40,
      width: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    cardUsername: {
      color: theme.gray1,
      fontSize: 20,
    },
    cardContent: {
      paddingVertical: 10,
      paddingHorizontal: 17,
    },
    cardImgWrap: {
      paddingVertical: 10,
      paddingHorizontal: 40,
    },
    cardImg: {
      height: 130,
      width: '100%',
    },
    cardActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    cardRow: {
      flexDirection: 'row',
    },
    cardBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  const selectableTags = [
    'Maize',
    'Beans',
    'Wheat',
    'Rice',
    'Sorghum',
    'Millet',
  ];
  const [searchTags, setSearchTags] = useState(['Maize', 'Seeds']);

  const getFilteredTags = () => {
    return selectableTags.filter(tag => !selectableTags.includes(tag));
  };

  const removeTag = idx => {
    let newTags = [...searchTags];
    newTags.splice(idx, 1);
    setSearchTags(newTags);
  };

  const posts = [
    {
      id: 1,
      avatar: require('../../../assets/images/robin_img.jpg'),
      username: 'John Doe',
      description: 'High quality maize seeds at  KES. 5,000 per kg.',
      image: require('../../../assets/images/robin_img.jpg'),
      likes: '10',
      comments: '20',
      purchases: '1K',
    },
    {
      id: 2,
      avatar: require('../../../assets/images/robin_img.jpg'),
      username: 'John Doe',
      description: 'High quality maize seeds at  KES. 5,000 per kg.',
      image: require('../../../assets/images/robin_img.jpg'),
      likes: '10',
      comments: '20',
      purchases: '1K',
    },
  ];

  return (
    <ScrollView>
      <Text>Marketplace</Text>
      <View style={styles.chipWrap}>
        {searchTags.map((tag, idx) => (
          <View key={tag} style={styles.chip}>
            <Text style={styles.chipText}>{tag}</Text>
            <TouchableOpacity onPress={() => removeTag(idx)}>
              <MaterialCommunityIcons
                style={[styles.chipIcon, styles.chipCloseIcon]}
                name="close"
                size={20}
              />
            </TouchableOpacity>
          </View>
        ))}
        <Menu>
          <MenuTrigger>
            <View style={[styles.chip, styles.addChip]}>
              <Text style={styles.chipText}>Add Tag</Text>
              <MaterialCommunityIcons
                style={[styles.chipIcon, styles.chipDropdownIcon]}
                name="chevron-down"
                size={25}
              />
            </View>
          </MenuTrigger>
          <MenuOptions>
            {getFilteredTags().map(tag => (
              <MenuOption
                key={tag}
                onSelect={() => setSearchTags([...searchTags, tag])}>
                <Text>{tag}</Text>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </View>

      <View style={styles.postCardsWrap}>
        {posts.map(post => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.topRow}>
              <View>
                <Image source={post.avatar} style={styles.cardAvatar} />
              </View>
              <View>
                <Text style={styles.cardUsername}>{post.username}</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text>{post.description}</Text>
            </View>
            <View style={styles.cardImgWrap}>
              <Image source={post.image} style={styles.cardImg} />
            </View>
            <View style={styles.cardActions}>
              <ShambaButton text="Purchase" />
            </View>
            <View style={styles.cardBottomRow}>
              <Text>{post.likes} Likes</Text>
              <Text>{post.comments} Comments</Text>
              <Text>{post.purchases} Purchases</Text>
            </View>
            <Divider />
            <View style={styles.cardBottomRow}>
              <TouchableOpacity style={styles.cardRow}>
                <Text>Like</Text>
                <MaterialCommunityIcons name="heart-outline" size={17} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardRow}>
                <Text>Comment</Text>
                <MaterialCommunityIcons name="comment-outline" size={17} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardRow}>
                <Text>Purchase</Text>
                <MaterialCommunityIcons name="cart-outline" size={17} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Marketplace;
