import app from './app';
import config from './common/envConfig';
import databaseConnect from './services/databaseConnect';

databaseConnect();

app.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
);
