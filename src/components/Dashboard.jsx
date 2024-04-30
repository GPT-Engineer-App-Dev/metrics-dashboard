import { Box, Flex, Text, Heading, SimpleGrid, Progress } from '@chakra-ui/react';

const data = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
  { month: 'Jul', sales: 3490, revenue: 4300 },
];

const Dashboard = () => {
  return (
    <Box p={5}>
      <Heading mb={5}>Business Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {data.map((item, index) => (
          <Flex key={index} direction="column" p={5} border="1px" borderColor="gray.200" borderRadius="md">
            <Text fontSize="xl" mb={2}>{item.month}</Text>
            <Text mb={1}>Sales: ${item.sales.toLocaleString()}</Text>
            <Progress colorScheme="green" size="sm" value={(item.sales / 10000) * 100} mb={4} />
            <Text mb={1}>Revenue: ${item.revenue.toLocaleString()}</Text>
            <Progress colorScheme="blue" size="sm" value={(item.revenue / 10000) * 100} />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;