/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import CardAtivo from '~/components/CardAtivo/index.jsx';
import InnerHeader from '~/components/InnerHeader/index.jsx';
import api from '~/services/api';

import './styles.css';

export default function MeusAtivos() {
  const [ativos, setAtivos] = useState([]);

  useEffect(() => {
    async function handleGetMeusAtivos() {
      const { data } = await api.get('meusativos');
      console.log(data);
      setAtivos(data);
    }
    handleGetMeusAtivos();
  }, []);

  return (
    <div className="ativos-page-container">
      <InnerHeader />
      {ativos.map((ativo) => (
        <CardAtivo
          nome={ativo.nome}
          valor={ativo.valor}
          quantidade={ativo.quantidade}
        />
      ))}
    </div>
  );
}