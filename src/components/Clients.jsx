import React from "react";
import { clients } from "../data";
import { clients_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const Clients = () => {
  const { language } = useLanguage();
  const currentClients = language === "en" ? clients : clients_es;

  return (
    <>
      <ul className='about-clients'>
        {currentClients.map((client) => (
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
