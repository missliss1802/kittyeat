import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight, Picker
} from 'react-native';
import ModalDropDown from 'react-native-modal-dropdown';
import {data} from './src/data';

const App = () => {
  let [items, setItems] = useState('')
  let [val, setVal] = useState('');
  let [bel, setBel] = useState('0');
  let [zur, setZur] = useState('0');
  let [ugl, setUgl] = useState('0');
  let [kal, setKal] = useState('0');
  let getWeight = (e) => {
    setVal(e);
  }
  let getEat = () => {
    let belRes = (parseFloat(bel) + parseFloat(val/100*data[items][0])).toFixed(2)
    let zurRes = (parseFloat(zur) + parseFloat(val/100*data[items][1])).toFixed(2)
    let uglRes = (parseFloat(ugl) + parseFloat(val/100*data[items][2])).toFixed(2)
    let kalRes = (parseInt(kal) + parseFloat(val/100*data[items][3])).toFixed(0);
    setBel(belRes);
    setZur(zurRes);
    setUgl(uglRes);
    setKal(kalRes);
  }
  let reset = () => {
    setBel('0');
    setZur('0');
    setUgl('0');
    setKal('0');
    setVal('')
  }
  let onVal = (itemValue, itemIndex) => {
    setItems(itemValue);
  }
  return (
    <View style={styles.body}>
      <View style={{alignItems: 'center'}}>
        <Image style={{width:200, height:130}} source={require('./src/kitty.png')}/>
      </View>
      <Input onVal={onVal} setItems={setItems} items={items} getWeight={getWeight} val={val} />
      <View>
        <TouchableHighlight style={styles.button}>
					<Button onPress={getEat} color='#5F92DD' title='добавить вкусняшку'></Button>
			  </TouchableHighlight>
      </View>
      <Result bel={bel} zur={zur} ugl={ugl} kal={kal} />
      <TouchableHighlight style={styles.button1}>
					<Button onPress={reset} color='#5F92DD' title='сброс'></Button>
			</TouchableHighlight>
    </View>
  );
};

const Input = (props) => {
  return (
    <View>
      <View style={styles.eat}>
        <Picker style={styles.input} selectedValue={props.items} onValueChange={(itemValue, itemIndex) => {props.setItems(itemValue); console.log(props.items)}}>
          {Object.keys(data).map((item) => 
            <Picker.Item key={item} label={item} value={item} />
          )}
        </Picker>
        <TextInput style={styles.input1} onChangeText={props.getWeight} value={props.val} placeholder='грамм'/>
      </View>
    </View>
  )
}

const Result = (props) => {
  return (
    <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.text}>белки:</Text>
      <Text style={styles.text1}>{props.bel}</Text>
    </View>
    <View style={{alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>
      <Text style={styles.text}>жиры:</Text>
      <Text style={styles.text1}>{props.zur}</Text>
    </View>
    <View style={{alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>
      <Text style={styles.text}>углеводы:</Text>
      <Text style={styles.text1}>{props.ugl}</Text>
    </View>
    <View style={{alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>
      <Text style={styles.text}>калории:</Text>
      <Text style={styles.text1}>{props.kal}</Text>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    width: '70%',
    margin: 2
  },
  input1: {
    backgroundColor: '#fff',
    marginTop: 10,
    width: '30%',
    margin: 2
  },
  text: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '45%',
    padding: 5,
    fontSize: 25
  },
  text1: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '30%',
    padding: 5,
    fontSize: 25,
    marginLeft: 1
  },
  button: {
		backgroundColor: '#5F92DD',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 30,
		marginBottom: 20
  },
  button1: {
		backgroundColor: '#5F92DD',
		marginLeft: '30%',
		marginRight: '30%',
		marginTop: 20,
		height: 30,
    marginBottom: 20,
  },
  eat: {
    flexDirection: 'row'
  }
});

export default App;
