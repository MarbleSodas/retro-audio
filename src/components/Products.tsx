import React from 'react'
import { Card, Grid, Text, Button, Row, Modal, useModal } from "@nextui-org/react";
import styles from '../styles/Products.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

function Products() {
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
            <Grid sm={3.5} key={index} className={styles.cardGrid}>
                <Card isPressable isHoverable onPress={() => setVisible(true)}>
                    <Card.Body css={{p: 0}}>
                    <Card.Image
                        src={"https://lh3.googleusercontent.com/" + item.img}
                        referrerPolicy='no-referrer'
                        objectFit="scale-down"
                        width="100%"
                        height="100%"
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
            width="900px"
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
                plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                events={{
                    googleCalendarId: '69652ca28d3ef7fe5f2ede28fc33ed6ad01ee0673a19e13e13853fdb1ab2b843@group.calendar.google.com',
                    className: 'gcal-event', // Optional: an additional class for styling events
                }}
                googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
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
