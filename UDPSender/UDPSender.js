#!/usr/bin/env node
/***
 *
 *      TOOL:
 *          UDPSender
 *
 *      ENV:
 *          None
 *
 *      12/7/2016   First code
 *
 *      https://nodejs.org/api/dgram.html#dgram_socket_send_msg_offset_length_port_address_callback
 *
 */
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const request = require('superagent');
const program = require('commander');
const fs = require("fs");

/*
    Get the host IP address, port number and message from the command line
 */
program
    .arguments( '<ipArg> <portArg> <messageArg>' )
    .action( function( ipArg, portArg, messageArg ) {
        client.send(messageArg, portArg, ipArg);
        console.log(`client sent ${messageArg} to ${ipArg}:${portArg}`);
    })
    .parse(process.argv);
