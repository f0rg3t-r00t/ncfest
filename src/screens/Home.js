// src/HomeScreen.js
import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TextInput } from 'react-native';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
    const imageUrl = 'https://www.blockchain.com/static/img/home/home-hero-gradient.jpg'; // Replace with your actual image URL

    return (
        <ScrollView contentContainerStyle={tailwind`flex-1 justify-center items-center bg-blue-500`}>
            <ImageBackground
                source={{ uri: imageUrl }}
                style={tailwind`w-200 h-150 mb-4`}
                resizeMode="cover"
            >
                <View style={tailwind`flex-1 justify-center items-center p-4`}>
                    {/* Multiline text with left alignment */}
                    <Text style={tailwind`text-white text-xl mx-45`} textAlign='left'>
                        {/* Icon with the primary text */}
                        <View style={tailwind`flex-row items-center`}>
                            <Text style={tailwind`text-3xl font-bold text-white`}>
                                The World’s Leading Cryptocurrency Platform
                            </Text>
                        </View>

                        {/* ... Other lines with icons */}
                        {'\n'}  
                        <View style={tailwind`flex-row items-center`}>
                        
                            <Text style={tailwind`text-3xl font-bold text-white`}>
                                Buy Bitcoin, Ethereum, and all your favourite crypto
                            </Text>
                        </View>
                        {'\n'}
                        {'\n'}
                        <View style={tailwind`flex-row items-center`}>
                            <Icon name="check" size={20} color="white" style={tailwind`mr-2`} />
                            <Text style={tailwind`font-normal text-cyan-100`}>
                                Trusted by more than 80M users worldwide
                            </Text>
                        </View>
                        {'\n'}
                        <View style={tailwind`flex-row items-center`}>
                            <Icon name="check" size={20} color="white" style={tailwind`mr-2`} />
                            <Text style={tailwind`font-normal text-cyan-100`}>
                                Leader in regulatory compliance and security certifications
                            </Text>
                        </View>
                        {'\n'}
                        <View style={tailwind`flex-row items-center`}>
                            <Icon name="check" size={20} color="white" style={tailwind`mr-2`} />
                            <Text style={tailwind`font-normal text-cyan-100`}>
                                The industry’s most comprehensive insurance coverage and verified proof of reserves
                            </Text>
                        </View>
                    </Text>
                </View>
            </ImageBackground>

            <View style={tailwind`flex-row justify-around w-full mb-4`}>

                {/* Adjust the height by adding the `h-32` class to the container */}
                <View style={tailwind`h-32`}> 
                    <Card title="Card 1" />
                </View>

                {/* Adjust the height by adding the `h-32` class to the container */}
                <View style={tailwind`h-32`}>
                    <Card title="Card 2" />
                </View>

                {/* Adjust the height by adding the `h-32` class to the container */}
                <View style={tailwind`h-32`}>
                    <Card title="Card 3" />
                </View>

            </View>

        </ScrollView>
    );
};

const Card = ({ title }) => {
    return (
        <View style={tailwind`bg-white p-4 rounded-md shadow-md w-28`}>
            <Text style={tailwind`text-center`}>{title}</Text>
        </View>
    );
};

export default HomeScreen;
