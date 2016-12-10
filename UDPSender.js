#!/usr/bin/env node
/***
 *
 *      TOOL:
 *          UDPSender
 *
 *      USAGE:
 *          node UDPsender.js ipAddress portNumber "message"
 *
 *      ENVIRONMENT:
 *          None
 *
 *      PACKAGES:
 *          npm install commander
 *
 *      UPDATES:
 *          12/7/2016   First code
 *
 *      REFERENCE:
 *          https://nodejs.org/api/dgram.html#dgram_socket_send_msg_offset_length_port_address_callback
 *
 */
const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const bufferStart = 0;

/*
    Use 'commander' to extract arguments from the command line
 */
const program = require('commander');

/*
    Get the host IP address, port number and message from the command line
 */
program
    .arguments( '<ipArg> <portArg> <messageArg>' )
    .action( function( ipArg, portArg, messageArg ) {
        client.send(messageArg, bufferStart, messageArg.length, portArg, ipArg, (err) => {
            client.close();
        });
        console.log(`client sent ${messageArg} to ${ipArg}:${portArg}`);

    })
    .parse(process.argv);

