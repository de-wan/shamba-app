import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StepForm from '../../ui/stepform/StepForm';

const AddCollection = () => {
  const totalSteps = 3;
  const [completeSteps, setCompleteSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <View>
      <StepForm.Form>
        <StepForm.SegmentHeader
          label="Query Farmer"
          stepNum={1}
          totalSteps={totalSteps}
          completeSteps={completeSteps}
          currentStep={currentStep}
        />
        <StepForm.SegmentHeader
          label="Product Information"
          stepNum={2}
          totalSteps={totalSteps}
          completeSteps={completeSteps}
          currentStep={currentStep}
        />
        <StepForm.SegmentHeader
          label="Collection Quantity"
          stepNum={3}
          totalSteps={totalSteps}
          completeSteps={completeSteps}
          currentStep={currentStep}
        />
      </StepForm.Form>
    </View>
  );
};

export default AddCollection;
