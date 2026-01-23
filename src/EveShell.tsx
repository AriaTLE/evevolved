import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavBar } from '@/components/NavBar';
import { Welcome } from '@/pages/Welcome/Welcome';


export function EveShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 70 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          {/*<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}

          <NavBar />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          This is our nav for mobile and desktop shrink you window to see.
        </AppShell.Navbar>
        <AppShell.Main>
          <audio autoPlay muted loop>
            <source src="./assets/Fucking%20Rocking_1.m4a" type="audio/mpeg" />
            {/*Your browser doesn't support audio.*/}
          </audio>
          <Welcome />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
