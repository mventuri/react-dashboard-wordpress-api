import React, { useState, useEffect } from 'react';
import PluginTable from './PluginTable';

import fetchPlugin from '../utils/Api'

function Report() {
  const [apiResp, setApiResp] = useState(null);

  useEffect(() => {
    async function fetch() {
      const resp = await fetchPlugin();
      setApiResp(resp)
    }

    fetch();
  }, []);

  return (
    <PluginTable plugins={apiResp ? apiResp.data : null} />
  )
}

export default Report

