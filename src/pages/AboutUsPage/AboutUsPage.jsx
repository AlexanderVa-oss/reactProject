import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const AboutUsPage = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h2" component="h2" gutterBottom>
                    About me
                </Typography>
                <Paper style={{ padding: '20px' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Our mission
                    </Typography>
                    <Typography paragraph>
                        I are committed to providing quality services and innovative solutions to my clients.
                    </Typography>
                    <Typography paragraph>
                        I try to solve any of your problems in the best way.
                    </Typography>
                </Paper>
                <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                        Developer
                    </Typography>
                    <Grid container spacing={3}>
                        {/* Пример карточки сотрудника */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={{ padding: '20px' }}>
                                <Typography variant="h5" component="h2">
                                    Alexander Kukushkin
                                </Typography>
                                <Typography paragraph>
                                    Position: Developer student</Typography>
                                <Typography paragraph>Work experience: junior</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default AboutUsPage;
