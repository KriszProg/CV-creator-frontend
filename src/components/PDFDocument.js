import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from '@react-pdf/renderer';
import defaultBackground from '../images/Background_Default.jpg';
import profilePhoto from '../images/user.png';
import font from '../font/ArialBold.ttf'

export function PDFDocument(props) {
    Font.register({ family: 'ArialBold', src: font});

    const {title} = props.fetchedCV.cvIdentifiers !== null ? props.fetchedCV.cvIdentifiers : '';
    const {name, role} = props.fetchedCV.candidate !== null ? props.fetchedCV.candidate : '';
    const {email, phoneNr, linkedInProfile} = props.fetchedCV.contact !== null ? props.fetchedCV.contact : '';
    const {selfDefinition} = props.fetchedCV.selfDefinition !== null ? props.fetchedCV.selfDefinition : '';
    const {strength} = props.fetchedCV.strength !== null ? props.fetchedCV.strength : '';
    const {mentorOpinion} = props.fetchedCV.mentorOpinion !== null ? props.fetchedCV.mentorOpinion : '';

    const styles = StyleSheet.create({
        page: {
            //any format to here if necessary
        },
        header: {
            width: '21cm',
            height: '4cm',
            // border: '1 solid blue'
        },
        candidate: {
            width: '7cm',
            padding: 3,
            position: 'absolute',
            color: 'white',
            top: '9mm',
            textAlign: 'right',
        },
        name: {
            fontSize: 17,
            textTransform: 'uppercase',
            fontFamily: 'ArialBold',
        },
        role: {
            fontSize: 10,
            textTransform: 'uppercase',
            fontFamily: 'ArialBold',
        },
        profilePhoto: {
            width: '3.8cm',
            height: '3.8cm',
            position: 'absolute',
            top: '2cm',
            left: '8.6cm',
            borderRadius: '19mm',
            border: '3 solid white',
            overflow: 'hidden'
        },
        CVbody: {
            display: 'flex',
            flexDirection: 'row',
        },
        leftPanel: {
            width: '8cm',
            height: '25cm',
            paddingLeft: '8mm',
            paddingRight: '5mm',
            flexGrow: 1,
            // border: '1 solid blue'
        },
        left40: {
            height: '4cm',
            // border: '1 solid yellow'
        },
        contactInfo: {
            height: '23mm',
            paddingTop: '4mm',
            paddingLeft: '6mm',
            lineHeight: 1.8,
            // border: '1 solid black'
        },
        left65: {
            height: '65mm',
            // border: '1 solid red'
        },
        left80: {
            height: '80mm',
            // border: '1 solid red'
        },
        rightPanel: {
            width: '13cm',
            height: '25cm',
            paddingLeft: '5mm',
            paddingRight: '8mm',
            flexGrow: 1,
            // border: '1 solid blue'
        },
        right30: {
            height: '30mm',
            // border: '1 solid red'
        },
        right40: {
            height: '4cm',
            // border: '1 solid yellow'
        },
        right70: {
            height: '70mm',
            // border: '1 solid red'
        },
        right80: {
            height: '80mm',
            // border: '1 solid red'
        },
        section: {
            marginTop: '5mm',
            textAlign: 'justify'
        },
        sectionRightAlign: {
            marginTop: '5mm',
            textAlign: 'right'
        },
        sectionTitle: {
            fontSize: 15,
            fontFamily: 'ArialBold'
        },
        sectionTitleRightAlign: {
            fontSize: 15,
            fontFamily: 'ArialBold',
            alignSelf: 'flex-end'
        },
        titleSeparator: {
            display: 'block',
            width: '8mm',
            height: '1mm',
            backgroundColor: '#ada335',
            marginTop: '1mm',
            marginBottom: '2mm',
        },
        titleSeparatorRightAlign: {
            display: 'block',
            width: '8mm',
            height: '1mm',
            backgroundColor: '#ada335',
            marginTop: '1mm',
            marginBottom: '2mm',
            alignSelf: 'flex-end',
            marginRight: '19mm'

        },
        icons: {
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-end',
            height: '23mm',
            // border: '1 solid black',
        },
        icon: {
            width: '11mm',
            height:'11mm',
            border: '1 solid grey',
            borderRadius: 2,
            marginHorizontal: '1mm',
            marginVertical: '5mm',
            padding: 3,
            textAlign: 'center'
        },
        text: {
            fontSize: 9,
        },
        link: {
            fontSize: 9,
            color: 'blue',
            textDecoration: 'underline'
        },
        linkSmaller: {
            fontSize: '1.2vw',
            color: 'blue',
            textDecoration: 'underline'
        }
      });

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        src={defaultBackground}
                    />
                    <View style={styles.candidate}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.role}>{role}</Text>
                    </View>
                    <View style={styles.profilePhoto}>
                        <Image
                            style={styles.image}
                            src={profilePhoto}
                        /> 
                    </View>
                </View>

                <View style={styles.CVbody}>
                    <View style={styles.leftPanel}>
                        <View style={styles.left40}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Contact</Text>
                                <View style={styles.titleSeparator}/>
                                <View style={styles.contactInfo}>
                                    <Text style={styles.link}>{email}</Text>
                                    <Text style={styles.text}>{phoneNr}</Text>
                                    <Link src={linkedInProfile} style={styles.linkSmaller}>{linkedInProfile}</Link>
                                </View>
                            </View>
                        </View>
                        <View style={styles.left80}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Self Definition</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{selfDefinition}</Text>
                            </View>
                        </View>

                        <View style={styles.left65}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Strength</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{strength}</Text>
                            </View>
                        </View>

                        <View style={styles.left65}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Mentor Opinion</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{mentorOpinion}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.rightPanel}>
                        <View style={styles.right40}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitleRightAlign}>Hard Skills</Text>
                                <View style={styles.titleSeparatorRightAlign}/>
                                <View style={styles.icons}>
                                    <Text style={styles.icon}>A</Text>
                                    <Text style={styles.icon}>B</Text>
                                    <Text style={styles.icon}>C</Text>
                                    <Text style={styles.icon}>D</Text>
                                    <Text style={styles.icon}>E</Text>
                                    <Text style={styles.icon}>F</Text>
                                    <Text style={styles.icon}>G</Text>
                                </View>
                            </View>
                        </View>
                        
                        <View style={styles.right80}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Recent Projects</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{selfDefinition}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.right30}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Work Experience</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{selfDefinition}</Text>
                            </View>
                        </View>

                        <View style={styles.right70}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Educations</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{selfDefinition}</Text>
                            </View>
                        </View>

                        <View style={styles.right30}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Spoken Languages</Text>
                                <View style={styles.titleSeparator}/>
                                <Text style={styles.text}>{mentorOpinion}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
