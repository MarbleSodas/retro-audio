import React, { useEffect, useState } from 'react'
import { Card, Grid, Text, Button, Row, Modal, useModal } from "@nextui-org/react";
import styles from '../styles/Products.module.css';
import FullCalendar from '@fullcalendar/react';
import { google } from 'googleapis';
import dayGridPlugin from '@fullcalendar/daygrid';

interface MyEventData {
    title: string;
    start: string;
    end: string;
  }

function Products() {
    const [events, setEvents] = useState<MyEventData[]>([]);

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          // Authenticate with Google API using OAuth2
          const auth = new google.auth.OAuth2({
            clientId: 'YOUR_CLIENT_ID',
            clientSecret: 'YOUR_CLIENT_SECRET',
            redirectUri: 'YOUR_REDIRECT_URI',
          });
  
          // Set up the access token
          const accessToken = 'YOUR_ACCESS_TOKEN';
          auth.setCredentials({ access_token: accessToken });
  
          // Create a Google Calendar API client
          const calendar = google.calendar({ version: 'v3', auth });
  
          // Retrieve events from Google Calendar
          const response = await calendar.events.list({
            calendarId: 'primary',
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
          });
  
          // Check if response.data.items is defined
          if (response.data.items) {
            // Process the retrieved events
            const eventsData: MyEventData[] = response.data.items.map((item: any) => ({
              title: item.summary,
              start: item.start.dateTime || item.start.date,
              end: item.end.dateTime || item.end.date,
            }));
  
            setEvents(eventsData);
          }
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
  
      fetchEvents();
    }, []);
    //products list
    const list = [
        {
          title: "Neo Noir",
          img: "mooLcYde-1L7Iye6y-ZbeiOr6-bJubn_C1U15kYnHHNQ5ziuXMo5aBeOty_tKF8pSyiWA87t5mvCfiAQeOjXWevbYFw81YgoO8kn_8YoBsyxUOjpy4bdqHdEh7ijSTL-n6oXISYL=w2400",
          price: "$120",
          itemInfo: "neoNoir",
        }
      ];
    //variables for modal visibility
    const { setVisible, bindings } = useModal();
  return (
    <div>
        <header className={styles.header}>
            <h1 className={styles.title}>
                Products
            </h1>
        </header>
        <Grid.Container gap={2} justify="center">
        {list.map((item, index) => (
            <Grid xs={12} sm={3.5} key={index}>
            <Card isPressable isHoverable onPress={() => setVisible(true)}>
                <Card.Body css={{p: 0}}>
                <Card.Image
                    src={"https://lh3.googleusercontent.com/" + item.img}
                    objectFit="cover"
                    width="100%"
                    height={600}
                    alt={item.title}
                />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                    <Text b className={styles.itemTitle}>{item.title}</Text>
                    <Text className={styles.itemPrice}>
                    {item.price}
                    </Text>
                </Row>
                </Card.Footer>
            </Card>
            </Grid>
        ))}
        </Grid.Container>
        {list.map((item, index) => (
        <Modal
            scroll
            width="1000px"
            aria-labelledby={item.title}
            aria-describedby={item.itemInfo}
            {...bindings}
        >
            <Modal.Header>
            <Text id="Neo Noir" className={styles.modalHeader}>
                Neo Noir
            </Text>
            </Modal.Header>
            <Modal.Body>
            <Text id="neoNoir" className={styles.modalText}>
                This model really brings back the nostalgia of retro in a classy way. 
            </Text>
            <Text id="neoNoir" className={styles.modalText}>
                It comes with an added feature of a pull-out drawer at the bottom of the phone so that 
                everyone can leave a note, whether it be verbal or written.
            </Text>
            <FullCalendar
                plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events}
            />
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onPress={() => setVisible(false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      ))}
  </div>
  )
}

export default Products