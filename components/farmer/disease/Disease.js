import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ShambaModal from '../../ui/ShambaModal';
import ReportDiseaseForm from './ReportDiseaseForm';
import DropdownMenu from '../../ui/DropdownMenu';

const Disease = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    filterBar: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    actionsBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'flex-end',
    },
    filterMenuTrigger: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: theme.primary,
      borderStyle: 'solid',
      borderRadius: 5,
      flexDirection: 'row',
    },
    filterMenuTriggerIcon: {
      marginLeft: 5,
    },
    cardsWrap: {
      padding: 10,
    },
    card: {
      padding: 10,
      backgroundColor: theme.wb_color1,
      borderBottomWidth: 1,
      borderBottomColor: theme.primary,
      flexDirection: 'row',
    },
    cardItemRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cardItemBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    cardColumn: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginHorizontal: 5,
    },
    flex1: {
      flex: 1,
    },
    cardTitle: {
      color: theme.gray1,
      fontSize: 20,
    },
    cardSubtitle: {
      color: theme.gray3,
      fontSize: 13,
    },
    chip: {
      backgroundColor: theme.gray5,
      height: 20,
      borderRadius: 10,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 2,
      marginVertical: 1,
    },
    chipText: {
      color: theme.inverted,
      fontSize: 12,
    },
    diseaseInfo: {
      fontSize: 10,
      color: theme.gray1,
    },
    primaryText: {
      color: theme.primary,
    },
    whiteText: {
      color: theme.wb_color,
    },
    statusWrap: {
      padding: 3,
      borderRadius: 5,
    },
    pendingStatusWrap: {
      backgroundColor: theme.warning,
    },
    completedStatusWrap: {
      backgroundColor: theme.primary,
    },
    cancelledStatusWrap: {
      backgroundColor: theme.danger,
    },
    warningText: {
      color: theme.warning,
    },
  });

  const getStatusWrapStyle = status => {
    switch (status) {
      case 'Pending':
        return styles.pendingStatusWrap;
      case 'Completed':
        return styles.completedStatusWrap;
      case 'Cancelled':
        return styles.cancelledStatusWrap;
      default:
        return styles.pendingStatusWrap;
    }
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [diseaseToReport, setDiseaseToReport] = useState(null);
  const [isReportingDisease, setIsReportingDisease] = useState(false);

  const diseaseReports = [
    {
      id: 1,
      name: 'Foot and Mouth Disease',
      foundIn: ['Animals'],
      type: 'Viral',
      reportsCount: 2,
    },
    {
      id: 2,
      name: 'Foot and Mouth Disease',
      foundIn: ['Animals'],
      type: 'Viral',
      reportsCount: 2,
    },
    {
      id: 3,
      name: 'Foot and Mouth Disease',
      foundIn: ['Animals'],
      type: 'Viral',
      reportsCount: 2,
    },
  ];

  const reschedule = booking => {
    console.log('Reschedule booking', booking);
  };

  const viewOnCalendar = booking => {
    console.log('View on calendar', booking);
  };

  const cancel = booking => {
    console.log('Cancel booking', booking);
  };

  const triggerReportDisease = (disease = null) => {
    setDiseaseToReport(disease);
    setIsReportingDisease(true);
  };

  return (
    <View>
      <SearchBar searchCallback={() => console.log('searching...')}>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Latest', onSelect: () => {} },
            { text: 'Largest Price', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}
      <View style={styles.actionsBar}>
        {/* <ShambaButton
          text="Calendar"
          onPress={() => setIsViewingCalendar(true)}
        /> */}
        {/* <ShambaButton text="Report" onPress={() => triggerReportDisease()} /> */}
      </View>

      {/* Loop through sales */}
      {diseaseReports.map(diseaseReport => (
        <View key={diseaseReport.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={[styles.cardColumn, styles.flex1]}>
              <Text style={styles.cardTitle}>{diseaseReport.name}</Text>
              <View style={styles.cardItemRow}>
                <Text style={styles.cardText}>Found In:</Text>
                {diseaseReport.foundIn.map(foundIn => {
                  return (
                    <View key={foundIn} style={styles.chip}>
                      <Text style={styles.chipText}>{foundIn}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={styles.cardItemBottomRow}>
                <View style={styles.cardItemRow}>
                  <Text style={styles.cardText}>Type:</Text>
                  <View style={styles.chip}>
                    <Text style={styles.chipText}>{diseaseReport.type}</Text>
                  </View>
                </View>
                <Text style={[styles.cardText, styles.warningText]}>
                  {diseaseReport.reportsCount} reports
                </Text>
              </View>
            </View>
            <View style={styles.cardColumn}>
              <DropdownMenu
                triggerContainerStyle={[styles.btn, styles.btnOptions]}
                trigger={
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={30}
                    color={theme.gray1}
                  />
                }
                options={[{ text: 'Report Disease', onSelect: () => {} }]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Report Modal */}
      <ShambaModal
        visible={isReportingDisease}
        title="REPORT DISEASE"
        onRequestClose={() => {
          setIsReportingDisease(false);
          setDiseaseToReport(null);
        }}>
        <ReportDiseaseForm diseaseToReport={diseaseToReport} />
      </ShambaModal>
    </View>
  );
};

export default Disease;
