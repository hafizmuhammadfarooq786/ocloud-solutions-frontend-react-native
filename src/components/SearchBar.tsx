import React from "react";
import { Input, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return value ? (
    <Input
      placeholder="Search countries..."
      value={value}
      onChangeText={onChange}
      borderRadius="full"
      bg="coolGray.100"
      py={3}
      px={4}
      fontSize="16"
      InputLeftElement={
        <Icon
          as={<Feather name="search" />}
          size={5}
          ml={4}
          color="coolGray.400"
        />
      }
      InputRightElement={
        <Icon
          as={<AntDesign name="closecircleo" />}
          size={6}
          mr={4}
          color="coolGray.400"
          onPress={() => onChange("")}
        />
      }
    />
  ) : (
    <Input
      placeholder="Search countries..."
      value={value}
      onChangeText={onChange}
      borderRadius="full"
      bg="coolGray.100"
      py={3}
      px={4}
      fontSize="16"
      InputLeftElement={
        <Icon
          as={<Feather name="search" />}
          size={5}
          ml={4}
          color="coolGray.400"
        />
      }
    />
  );
};

export default SearchBar;
