import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Video } from 'expo-av';
import whaleshark from './assets/whaleshark.mp4';
import turtle from './assets/seaturt.mp4';

export default function App() {
  var touches = [];
  const video = React.useRef(null);
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

  const handlePress = (evt) => {
    const coords = [evt.nativeEvent.locationX, evt.nativeEvent.locationY]
    touches.push(coords);
    console.log(`${touches}`);
  };
  
  return (
    
    <View className="flex-1 items-center justify-center bg-white">
     <TouchableOpacity onPress={(evt) => handlePress(evt) } >
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
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1NNssV4AS_MEFv1x_DN7TpRCWL76YKOZeg&usqp=CAU" }} style={{ width: 305, height: 159 }} />
            <Text> neither </Text>
          </View>
        ) :
        topShow ? (
          <View className="items-center justify-center">
            <Video ref={video} style={{width: 305, height: 159}} source={ whaleshark } 
              resizeMode="contain" shouldPlay= {true} isMuted= {false} isLooping= {true}
              />
          </View>
        ) :
        bottomShow ? (
          <View className="items-center justify-center">
            <Video ref={video} style={{width: 305, height: 159}} source={ turtle } 
              resizeMode="contain" shouldPlay= {true} isMuted= {false} isLooping= {true}
              />
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
      </TouchableOpacity>
    </View>
  );
}


{/* <Video ref={video} style={{width: 305, height: 159}} source={ whaleshark } 
              resizeMode="contain" shouldPlay= {true} isMuted= {false} isLooping= {true}
              /> */}
