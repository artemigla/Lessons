import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './Styles';
import Background from '../assets/Background.jpg';
import { regex } from '../constants/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

export const Content = () => {

    //Напиши пожалуйста, стоит ли так "вытягивать" стили, или нет?
    const { container, backgroundImage, profile, form,
        input, button, textButton, disabledButton,
        info, text, icon } = styles;

    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('Name');

    const handlerInputName = (event) => setInputName(event);

    const handlerButton = () => {

        //Здесь проверяю корректность ввода. 
        //Если в имени есть цифры, числа или другие символы, Alert() показывает предупреждение.
        inputName.trim(' ') && !regex.test(String(inputName)) ? setName(inputName) : alert("Не корректный ввод!");
        setInputName('');
    }

    //Если имя было введено с малой буквы, первая буква отобразится заглавной.
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    const clearName = () => setInputName('');

    const activeButton = inputName.trim(' ').length;

    return (
        <View style={container}>
            <ImageBackground source={Background} style={backgroundImage}>
                <ScrollView>
                    <Text style={profile}>Profile</Text>
                    <View style={form}>
                        <TextInput
                            style={input}
                            placeholder={'Enter your name...'}
                            value={inputName}
                            onChangeText={handlerInputName}
                        />

                        {/*Добавил иконку в поле ввода, на которую можно нажать, чтоб очистить поле.*/}
                        <View>
                            {activeButton ? <Icon
                                style={icon}
                                name="close-circle-outline" size={26}
                                color="gray"
                                onPress={clearName}
                            /> : null}
                        </View>
                        {/* Это проверка на то, чтоб вместо имени, не выводилась пустая строка */}
                        {activeButton ?
                            <TouchableOpacity style={button} onPress={handlerButton}>
                                <Text style={textButton}>Save</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity disabled={true} style={disabledButton}>
                                <Text style={textButton}>Block</Text>
                            </TouchableOpacity>}
                    </View>
                    <View style={info}>

                        {/* Отображает строку из инпута*/}
                        <Text style={text}>Your name is:
                            <Text style={{ color: 'blue' }}>{` ${name.trim(' ').capitalize()}`}</Text>
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};