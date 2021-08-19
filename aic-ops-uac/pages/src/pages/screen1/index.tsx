
import { FC } from 'react'
import MainLayout from '../../layouts/main'
import Header from './header';
import Content from './content';
import withRouter from 'next/dist/client/with-router';

interface IProps {
}
const Screen1: FC<IProps> = props => {

    return <MainLayout>
        <Header />
        <Content />
    </MainLayout>
}

export default withRouter(Screen1);