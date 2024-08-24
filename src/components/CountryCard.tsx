import React from "react";
import { StyledText, StyledView } from "../shared/shared";
import { TouchableOpacity } from "react-native";

interface CountryCardProps {
  country: {
    name: string;
    emoji: string;
  };
  onPress?: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView tw="w-[160px] h-[120px] flex justify-start items-center rounded-lg overflow-hidden shadow-lg bg-white border border-gray-300 p-4 mb-2">
        <StyledText tw="text-3xl">{country.emoji}</StyledText>
        <StyledText tw="text-md text-center mt-4">{country.name}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default CountryCard;
