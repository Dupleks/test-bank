import { useState } from 'react';
import Head from 'next/head';
import 'gestalt/dist/gestalt.css';

import { Box, Button, Heading, SelectList, TextField } from 'gestalt';

function HomePage() {
  let [balance, setBalance] = useState(6000);
  let [amount, setAmount] = useState(0);
  let [error, setError] = useState('');

  const onSubmit = () => {
    setAmount(0);
    setBalance(balance - amount);
  };

  return (
    <>
      <Head>
        <title>Банк</title>
      </Head>
      <Box
        display="flex"
        marginLeft="auto"
        marginRight="auto"
        marginBottom="auto"
        marginTop="auto"
        wrap
        paddingY={12}
        width="100%"
        direction="column"
        maxWidth={500}
      >
        <Box flex="grow" paddingX={3} paddingY={3}>
          <Heading size="md">Текущий Баланс: {balance}</Heading>
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <Heading size="sm">Перевод</Heading>
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <SelectList
            label="Кому?"
            id="selectlist"
            options={[
              {
                value: 'egor',
                label: 'Егор',
              },
              {
                value: 'alexey',
                label: 'Алексей',
              },
              {
                value: 'anton',
                label: 'Антон',
              },
            ]}
            onChange={() => {}}
          />
        </Box>

        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            label="Сколько?"
            id="amount"
            onChange={(e) => {
              e.event.preventDefault();
              let diff = Math.abs(e.value.length - amount.length);

              if (diff <= 1 && e.value.length > 3) {
                setError('Значение должно быть меньше 3 цифр');
              } else {
                setError('');
              }
              setAmount(e.value);
            }}
            type="text"
            placeholder="0"
            onFocus={() => setAmount('')}
            value={amount}
            errorMessage={error}
          />
        </Box>

        <Box flex="grow" paddingX={3} paddingY={3}>
          <Box
            justifyContent="end"
            marginStart={-1}
            marginRight={-1}
            marginTop={-1}
            marginBottom={-1}
            display="flex"
            wrap
          >
            <Box paddingX={1} paddingY={1}>
              <Button
                disabled={!!error}
                text="Отправит"
                color="red"
                size="lg"
                type="submit"
                onClick={() => onSubmit()}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
