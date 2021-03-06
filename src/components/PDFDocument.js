import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import defaultBackground from '../images/Background_Default.jpg';
import profilePhoto from '../images/user.png';
import envelope from '../images/envelope-solid.png';
import phone from '../images/phone-alt-solid.png';
import linkedin from '../images/linkedin-brands.png';
import font from '../font/ArialBold.ttf'

export function PDFDocument(props) {
    Font.register({ family: 'ArialBold', src: font});
    
    const backgroundUrl = props.fetchedCV.background !== null ? props.fetchedCV.background.url : defaultBackground;
    const profilePhotoUrl = props.fetchedCV.profilePhoto !== null ? props.fetchedCV.profilePhoto.url : profilePhoto;
    
    const {name, role} = props.fetchedCV.candidate !== null ? props.fetchedCV.candidate : '';
    const {email, phoneNr, linkedInProfile} = props.fetchedCV.contact !== null ? props.fetchedCV.contact : '';

    const personalInfoList = props.fetchedCV.personalInfoList;
    const projectList = props.fetchedCV.projectList;
    const jobList = props.fetchedCV.jobList;
    const qualificationList = props.fetchedCV.qualificationList;
    const languageList = props.fetchedCV.languageList;

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
        },
        left35: {
            height: '35mm',
            // border: '1 solid yellow'
        },
        contactInfoBox: {
            height: '20mm',
            paddingTop: '3mm',
            lineHeight: 1.8,
            // border: '1 solid black'
        },
        contactInfoLine: {
            display: 'flex',
            flexDirection: 'row',
        },
        faBox: {
            width: '4mm',
            height: '4mm',
            marginRight: '2mm'
        },
        left65: {
            height: '65mm',
            // border: '1 solid red'
        },
        left85: {
            height: '85mm',
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
        right35: {
            height: '35mm',
            // border: '1 solid yellow'
        },
        right40: {
            height: '4cm',
            // border: '1 solid red'
        },
        right55: {
            height: '55mm',
            // border: '1 solid red'
        },
        right90: {
            height: '90mm',
            // border: '1 solid red'
        },
        card: {
            marginBottom: '3mm'
        },
        projectTitle: {
            fontSize: 8,
            fontFamily: 'ArialBold',
            textTransform: 'uppercase',
            marginBottom: '1mm'
        },
        infoLineBold: {
            fontSize: 9,
            fontFamily: 'ArialBold',
        },
        section: {
            marginTop: '3mm',
            textAlign: 'justify'
        },
        sectionRightAlign: {
            marginTop: '4mm',
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
            height: '20mm',
            // border: '1 solid black',
        },
        icon: {
            width: '11mm',
            height:'11mm',
            border: '1 solid grey',
            borderRadius: 2,
            marginHorizontal: '1mm',
            marginVertical: '4mm',
            padding: 3,
            textAlign: 'center'
        },
        text: {
            fontSize: 9,
        },
        infoLineNormal: {
            fontSize: 9,
            marginBottom: '1mm'
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
                        src={backgroundUrl}
                    />
                    <View style={styles.candidate}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.role}>{role}</Text>
                    </View>
                    <View style={styles.profilePhoto}>
                        <Image
                            style={styles.image}
                            src={profilePhotoUrl}
                        /> 
                    </View>
                </View>

                <View style={styles.CVbody}>
                    <View style={styles.leftPanel}>
                        <View style={styles.left35}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Contact</Text>
                                <View style={styles.titleSeparator}/>
                                <View style={styles.contactInfoBox}>
                                    <View style={styles.contactInfoLine}>
                                        <Image style={styles.faBox} src={envelope}/>
                                        <Text style={styles.link}>{email}</Text>
                                    </View>
                                    <View style={styles.contactInfoLine}>
                                        <Image style={styles.faBox} src={phone}/>
                                        <Text style={styles.text}>{phoneNr}</Text>
                                    </View>
                                    <View style={styles.contactInfoLine}>
                                        <Image style={styles.faBox} src={linkedin}/>
                                        <Text style={styles.linkSmaller}>{linkedInProfile}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {personalInfoList.length > 0 &&
                            personalInfoList.map((pi, index) => {
                                return (

                                <View key={index} style={index == 0 ? styles.left85 : styles.left65}>
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>{pi.sectionTitle}</Text>
                                        <View style={styles.titleSeparator}/>
                                        <Text style={styles.text}>{pi.text}</Text>
                                    </View>
                                </View>
                                )
                            })
                        }
                    </View>

                    <View style={styles.rightPanel}>
                        <View style={styles.right35}>
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
                        
                        <View style={styles.right90}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Recent Projects</Text>
                                <View style={styles.titleSeparator}/>
                                {projectList.length > 0 &&
                                projectList.map((project, index) => {
                                    return (
                                    <View key={index} style={styles.card}>
                                        <Text style={styles.projectTitle}>{project.title}</Text>
                                        <Text style={styles.link}>{project.url1}</Text>
                                        <Text style={styles.link}>{project.url2}</Text>
                                        <Text style={styles.text}>{project.description}</Text>
                                    </View>
                                    )
                                })
                                }
                            </View>
                        </View>
                        
                        <View style={styles.right40}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Work Experience</Text>
                                <View style={styles.titleSeparator}/>
                                {jobList.map((job, index) => {
                                    return(
                                    <View key={index}>
                                        <Text style={styles.infoLineBold}>{job.role}</Text>
                                        <Text style={styles.infoLineNormal}>({job.yearFrom} - {job.yearTo}) - {job.company}</Text>
                                    </View>  
                                    )
                                })
                                }
                            </View>
                        </View>

                        <View style={styles.right55}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Educations</Text>
                                <View style={styles.titleSeparator}/>
                                {qualificationList.map((qua, index) => {
                                    return(
                                    <View key={index}>
                                        <Text style={styles.infoLineBold}>{qua.name} ({qua.degree})</Text>
                                        <Text style={styles.infoLineNormal}>({qua.yearFrom} - {qua.yearTo}) - {qua.school} ({qua.cityOfSchool})</Text>
                                    </View>  
                                    )
                                })
                                }
                            </View>
                        </View>

                        <View style={styles.right30}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Spoken Languages</Text>
                                <View style={styles.titleSeparator}/>
                                {languageList.map((lang, index) => {
                                    return(
                                    <View key={index}>
                                        <Text style={styles.infoLineNormal}> 
                                            <Text style={styles.infoLineBold}>{lang.language} </Text>
                                            - {lang.level}
                                        </Text>
                                    </View>  
                                    )
                                })
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
