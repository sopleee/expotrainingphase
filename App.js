import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect} from 'react';

export default function App() {
  const [topShow, setTopShow] = useState(false);
  const [bottomShow, setBottomShow] = useState(false);
  
  // variables for changing visibility according to timings
  const [hideTop, setHideTop] = useState(false);
  const [hideBottom, setHideBottom] = useState(true);
  const [seconds, setSeconds] = useState(1);

  //function for chaging visibility according to timings:
  const changeVisibility = (locale) => {
    setHideBottom(locale="Hide Bottom");
    setHideBottom(locale="Hide Top");
  }

  const hidingFunction = () => {
    const interval = setInterval(() => setSeconds((seconds+1)%3), 30000);
  }

  const Moving = ({ onShown }) => {
    const interval = setInterval(() => setSeconds((seconds+1)%3), 30000);
  }

  const changeCenter = (locale) => {
    setTopShow(locale == 'Top');
    setBottomShow(locale == 'Bottom');
  };
  return (

    <View className="flex-1 items-center justify-center bg-white">
      <Moving onShown={() => Alert.alert('Animation is done')} />
      <View>
        {(seconds !== 2) && <TouchableOpacity onPress={() => changeCenter('Top')}>
        <View style={{ backgroundColor: "#A9B0BA", width: 390, height: 340, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{ uri: "https://www.aquablog.ca/wp-content/uploads/2016/05/Spot-prawn-main.jpg" }} style={{ width: 305, height: 159}} />
        </View>
      </TouchableOpacity>}
      </View>
      
      {
        !topShow && !bottomShow? (
          <View className="items-center justify-center">
            <Image source={{ uri: "https://www.oregonlive.com/resizer/sdwbSdFKcI0ht_0DqQ9NMQEJ9uM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/bb90877c7a/width2048/11f_shark3.jpeg" }} style={{ width: 305, height: 159 }} />
            <Text> neither </Text>
          </View>
        ) :
        topShow ? (
          <View className="items-center justify-center">
            <Image source={{ uri: "https://www.mensjournal.com/wp-content/uploads/2014/03/CATERS_HAMMERHEAD_SHARKS_SURROUND_DIVER_FEEDING_TOUCHING_06.jpg?w=1200&h=1200&crop=1&quality=80&strip=all" }} style={{ width: 305, height: 159 }} />
            <Text> yes top </Text>
          </View>
        ) :
        bottomShow ? (
          <View className="items-center justify-center">
            <Image source={{ uri: "https://media.greenmatters.com/brand-img/c7EPLoIej/0x0/shark-1645644297742.jpg" }} style={{ width: 305, height: 159 }} />
            <Text> yes bottom </Text>
          </View>
        ) 
      :null}
      <View>
        {(seconds !== 1) && <TouchableOpacity onPress={() => changeCenter('Bottom')}>
      <View style={{ backgroundColor: "#1D2C1B", width: 390, height: 340, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: "https://img.izismile.com/img/img3/20100606/640/the_fish_with_640_03.jpg" }} style={{ width: 305, height: 159 }} />
        </View>
      </TouchableOpacity>}
      </View>
      
    </View>
  );
}

{/* */}
