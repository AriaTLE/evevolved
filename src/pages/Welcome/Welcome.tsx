import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';


export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          <br />
          EveVolved
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        So here it goes. I am creating a new social network. I/we are going to blow X and facebook
        <br />
        out of the water or maybe we can just part it around them. This social network is going to
        be <br />
        built with love and empathy for the human race. These tech people who have
        <br />
        a board dictating decisions are gonna say right as they read this with their pride
        <br />
        "This will never happen good luck beating me." So as they are reading this and I predict the
        <br />
        prideful attitude they are going to have as they laugh again now saying no way in hell.{' '}
        <br />
        I give you a :) and a ;). If you want to help me I might let you if you are nice
        <br />
        but you get ZERO of this company.
        <br />
        You could offer me a billion dollars for a percent and I will say no. Now your really
        laughing
        <br />
        well I am not Bull shitting you try me. This network is being built to show the world the
        talent
        <br />
        being left in the gutter and to give these people a way out. Thats my mission. Think bigger
        than the room. And no Elon mars doesn't count. When I say bigger than the room
        <br />
        I am talking about people Elon people not mars dust. Enjoy your time on a planet locked in a
        room
        <br />
        with no air to breathe outside (kinda like my time being persecuted for just being me.). Its
        time to give
        <br />
        Peace ;)
        <br />
        a chance.
        <br />
        Donate here Bitcoin: bc1qu8hw63dyrta3phr8s2zcpc0ccq0suxg566slx9<br />
        I am going to be completely transparent with your funds.
      </Text>
    </>
  );
}
