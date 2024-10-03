import React from "react";
import { clients } from "../data";

const Clients = () => {
  return (
    <>
      <ul className='about-clients'>
        {clients.map((client) => (
          <li key={client.name}>
            <a
              href={client.link}
              target='_blank'
              rel='noreferrer'
              alt={client.name}
            >
              <span className='client-since'>{client.since}</span>
              {client.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Clients;
