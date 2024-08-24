import React, { useState } from "react";
import { Input } from "native-base";
import { useDispatch } from "react-redux";
import { addPlan } from "../redux/slices/travelPlanSlice";
import { StyledButton, StyledView } from "../shared/shared";

interface TravelPlanFormProps {
  country: string;
}

const TravelPlanForm: React.FC<TravelPlanFormProps> = ({ country }) => {
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addPlan({ id: Date.now().toString(), country, details }));
    setDetails("");
  };

  return (
    <StyledView tw="mt-8">
      <Input
        placeholder="Enter travel details"
        value={details}
        onChangeText={setDetails}
        mb="4"
        size={8}
        color="coolGray.400"
        borderBottomWidth="1"
        borderBottomColor="coolGray.300"
      />
      <StyledButton
        title=" Add Travel Plan"
        tw="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onPress={handleSubmit}
      />
    </StyledView>
  );
};

export default TravelPlanForm;
