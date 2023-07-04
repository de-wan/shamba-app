import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ThemeContext } from '../../../context/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Form = ({ children }) => {
  return <View>{children}</View>;
};

const SegmentHeader = ({
  label,
  stepNum,
  totalSteps,
  completeSteps,
  currentStep,
}) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    indicatorWrap: {
      position: 'relative',
      width: 35,
      height: 35,
    },
    indicatorContentWrap: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    indicatorText: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    labelTextWrap: {
      flex: 1,
    },
    labelText: {
      fontSize: 14,
      marginLeft: 10,
    },
    boldText: {
      fontWeight: 'bold',
    },
  });

  const segments = totalSteps || 1;
  const width = 3;
  const margin = 0.1;
  const svgSize = 32;
  const radius = svgSize / 2 - 5;

  const polarToCartesian = (x, y, r, degrees) => {
    const radians = (degrees * Math.PI) / 180.0;
    return [x + r * Math.cos(radians), y + r * Math.sin(radians)];
  };

  const segmentPath = (x, y, r0, r1, d0, d1) => {
    // https://svgwg.org/specs/paths/#PathDataEllipticalArcCommands
    const arc = Math.abs(d0 - d1) > 180 ? 1 : 0;
    const point = (radius, degree) =>
      polarToCartesian(x, y, radius, degree)
        .map(n => n.toPrecision(5))
        .join(',');
    return [
      `M${point(r0, d0)}`,
      `A${r0},${r0},0,${arc},1,${point(r0, d1)}`,
      `L${point(r1, d1)}`,
      `A${r1},${r1},0,${arc},0,${point(r1, d0)}`,
      'Z',
    ].join('');
  };

  const segment = (n, activeSegments) => {
    const center = svgSize / 2;
    const degrees = 360 / segments;
    const start = degrees * n;
    const end = degrees * (n + 1 - margin) + (margin === 0 ? 1 : 0);
    const path = segmentPath(
      center,
      center,
      radius,
      radius - width,
      start,
      end
    );

    let fill = theme.gray1;
    if (n < activeSegments) {
      fill = theme.primary;
    }
    return `<path d="${path}" style="fill:${fill};stroke:none" />`;
  };

  let segmentPaths = '';
  for (let i = segments - 1; i >= 0; i--) {
    segmentPaths += segment(i, completeSteps);
  }

  const xml = `
  <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">
    ${segmentPaths}
  </svg>
  `;

  return (
    <View style={styles.row}>
      <View style={styles.indicatorWrap}>
        <View style={styles.indicatorContentWrap}>
          {(stepNum || 1) > completeSteps ? (
            <Text style={styles.indicatorText}>{stepNum || 1}</Text>
          ) : (
            <MaterialCommunityIcons
              name="check"
              size={18}
              color={theme.primary}
            />
          )}
          {/* {(stepNum || 1) < completeSteps ? (
            <Text style={styles.indicatorText}>{stepNum || 1}</Text>
          ) : (
            <MaterialCommunityIcons name="check" size={18} color={theme.primary} />
          )} */}
        </View>
        <View style={styles.indicatorContentWrap}>
          <SvgXml xml={xml} width={svgSize} height={svgSize} />
        </View>
      </View>
      <View style={styles.labelTextWrap}>
        <Text
          style={
            (styles.labelText,
            (stepNum || 1) === currentStep ? styles.boldText : null)
          }>
          {label}
        </Text>
      </View>
      <View>
        {(stepNum || 1) === currentStep ? (
          <MaterialCommunityIcons name="chevron-down" size={24} />
        ) : (
          <MaterialCommunityIcons name="chevron-right" size={24} />
        )}
      </View>
    </View>
  );
};

const SegmentBody = ({ children }) => {
  return <View>{children}</View>;
};

export default {
  Form,
  SegmentHeader,
  SegmentBody,
};
