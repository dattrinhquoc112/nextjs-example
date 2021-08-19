
import { FC } from 'react'
import MainLayout from '../../layouts/main'
import Header from './header';
import Content from './content';

interface IProps { }
const Screen2: FC<IProps> = props => {

    return <MainLayout>
        <Header />
        <Content />
    </MainLayout>
}

export default Screen2;