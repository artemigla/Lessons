import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './Styles';
import Background from '../assets/Background.jpg';
import { regex } from '../constants/Constants';

export const Content = () => {

    //Напиши пожалуйста, стоит ли так "вытягивать" стили, или нет?
    const { container, backgroundImage, profile, form,
        input, button, textButton, disabledButton,
        info, text } = styles;

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

                        {/* Это проверка на то, чтоб вместо имени, не выводилась пустая строка */}
                        {inputName.trim(' ').length > 1 ?
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
                            <Text style={{ color: 'blue' }}>{` ${name.capitalize()}`}</Text>
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};