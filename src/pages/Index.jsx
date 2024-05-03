import React, { useState } from "react";
import { Box, Button, Input, VStack, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "Hello! I'm the AI assistant. How can I help you today?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <Box p={5}>
      <Flex alignItems="center" mb={5}>
        <FaRobot size="24px" />
        <Text ml={2} fontSize="xl" fontWeight="bold">
          AI Chat Bot
        </Text>
      </Flex>
      <VStack spacing={4} align="stretch">
        <VStack spacing={2} align="stretch" height="400px" overflowY="auto" p={3} border="1px" borderColor="gray.200">
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
              <Text fontSize="md" p={2} bg={message.sender === "user" ? "blue.100" : "green.100"} borderRadius="lg">
                {message.text}
              </Text>
            </Box>
          ))}
        </VStack>
        <Flex>
          <Input placeholder="Type your message here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <IconButton icon={<FaPaperPlane />} ml={2} colorScheme="blue" onClick={handleSendMessage} aria-label="Send Message" />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
