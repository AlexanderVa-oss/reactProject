import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const AboutUsPage = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                    О нас
                </Typography>
                <Paper style={{ padding: '20px' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Наша миссия
                    </Typography>
                    <Typography paragraph>
                        Мы стремимся предоставлять качественные услуги и инновационные решения для наших клиентов.
                    </Typography>
                    <Typography paragraph>
                        Наша команда состоит из опытных специалистов, готовых решить любую вашу задачу.
                    </Typography>
                </Paper>
                <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                        Команда
                    </Typography>
                    <Grid container spacing={3}>
                        {/* Пример карточки сотрудника */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={{ padding: '20px' }}>
                                <Typography variant="h6" component="h3">
                                    Иван Иванов
                                </Typography>
                                <Typography paragraph>Должность: Разработчик</Typography>
                                <Typography paragraph>Опыт работы: 5 лет</Typography>
                            </Paper>
                        </Grid>
                        {/* Добавьте других сотрудников аналогично */}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default AboutUsPage;
