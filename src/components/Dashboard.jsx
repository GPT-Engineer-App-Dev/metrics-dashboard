import { Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Sales: 4000, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Revenue: 1398 },
  { name: 'Mar', Sales: 2000, Revenue: 9800 },
  { name: 'Apr', Sales: 2780, Revenue: 3908 },
  { name: 'May', Sales: 1890, Revenue: 4800 },
  { name: 'Jun', Sales: 2390, Revenue: 3800 },
  { name: 'Jul', Sales: 3490, Revenue: 4300 },
];

const Dashboard = () => {
  return (
    <Box p={5}>
      <Heading mb={5}>Business Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box height="300px">
          <Text mb={3} fontSize="xl">Sales Over Time</Text>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Box height="300px">
          <Text mb={3} fontSize="xl">Revenue Over Time</Text>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;