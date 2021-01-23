Learning from this Project
==========================

Rebass
------

### ThemeProvider
- By default Rebass is unopinionated and doesn't include a theme.
- A theme can always be added usisng the `ThemeProvider` context.
- Below is an example of this being done with the emotion provider, though styled could just as well be used.

```js
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
export default props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);
```

### Theming

- You can use the default Rebass theme or completely customize the look & feel with a custom theme.
- Rebass will follow the theme specification that you create seperately than pass through in the context.

```js
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    primary: '#07c',
    gray: '#f6f6f6',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
}
// In root level App component wrap the children in ThemeProvider
export default props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);
```

### Card Component Using Box

This example uses the `rebass` `Box` component as a *Card* which is common in many UI kits.

***TODO*** use the solitaire cards' component as an example here.

```js
<Box width={256}>
  <Card
    sx={{
      p: 1,
      borderRadius: 2,
      boxShadow: '0 0 16px rgba(0, 0, 0, 0.25)',
    }}>
  <Image src={props.image} />
  <Box px={2}>
    <Heading as="3">Card Demo</Heading>
    <Text fontSize={0}>
      You can edit this code
    </Text>
  </Box>
  </Card>
</Box>
```

Misc
-----

- CRA not reloading the app on changes can be temporarily fixed with the first bash snippet, permanently using the latter.
- Taken from this [StackOverflow](https://stackoverflow.com/questions/42189575/create-react-app-reload-not-working)

```bash
sudo -i
echo 1048576 > /proc/sys/fs/inotify/max_user_watches
exit
```

```bash
echo 'fs.inotify.max_user_watches=52488' >> /etc/sysctl.conf
sudo sysctl -p
```

