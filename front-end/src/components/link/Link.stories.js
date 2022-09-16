import React from 'react';
import Link from './Link';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

// Helps with alignment
const Stack = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

// sets defaults for this component's stories
export default {
    component: Link,
    title: 'Link',
};

// TODO: return story
const Template = args => {
    return (
        <Stack>
            <Link {...args} />
            <Link title="The most awesome website" url="https://linkedin.com/in/colin-brockman" />
        </Stack>
    );
}

const Avatar = args => {
    return (
        <Stack>
            <UserAvatar alt="Profile for the swimming boy" src="https://c.tenor.com/evZ0NI7XMwMAAAAM/corgi-swimming.gif" />
        </Stack>
    );
}

// I've pre-defined arguments for our Default story – feel free to edit!
export const Default = Template.bind({});
Default.args = {
    link: 'https://www.google.com',
    title: "GO TO GOOGLE"
}

export const AvatarStory = Avatar.bind({});