import React, { useState, FormEvent } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Container,
  Grid,
  Textarea,
  Input,
  Image,
} from '@chakra-ui/react';

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    appointment_request: '',
    appointment_type: '',
    preferredCommunication: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formHeight, setFormHeight] = useState(0);

  React.useEffect(() => {
    const updateFormHeight = () => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        setFormHeight(formElement.offsetHeight);
      }
    };

    updateFormHeight();
    window.addEventListener('resize', updateFormHeight);
    return () => window.removeEventListener('resize', updateFormHeight);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!formData.name || !formData.email) {
        alert('Please fill in your name and email address.');
        return;
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      alert("Thank you for your message. We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: '',
        appointment_request: '',
        appointment_type: '',
        preferredCommunication: '',
      });
    } catch {
      alert('There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box mb={8} pb={8}>
      <Container maxW="80%" px={{ base: 4, md: 0 }} pb={6}>
        <Grid templateColumns="repeat(12, 1fr)" mb={6}>
          <Box gridColumn="1 / -1">
            <Heading
              as="h3"
              fontSize="5xl"
              fontWeight="medium"
              lineHeight="1.2"
              mt="20px"
              mb="20px"
              color="black"
            >
              Leave a Message – For our Existing Clients
            </Heading>
            <Text fontSize={['lg', 'lg', 'xl']} mb={4} color="black">
              We check our messages in the mornings of Tuesday, Wednesday, and
              Thursday. We will check messages through the rest of the week
              daily.
            </Text>
          </Box>
        </Grid>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={6}
          align="flex-start"
          maxW="100%"
        >
          {/* Form */}
          <Box
            bg="white"
            width={{ base: '100%', md: '65%' }}
            border="1px solid rgba(0, 0, 0, 0.1)"
            boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
            id="contact-form"
          >
            <Box m={{ base: 4, md: 8 }} color="#0B0E3F">
              <form onSubmit={handleSubmit}>
                <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
                  <FormControl id="name" flex="1" isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      size="lg"
                      borderRadius="0"
                      borderColor="#E0E1E7"
                    />
                  </FormControl>
                  <FormControl id="email" flex="1" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      size="lg"
                      borderRadius="0"
                      borderColor="#E0E1E7"
                    />
                  </FormControl>
                </Flex>

                <FormControl id="message" mt={5}>
                  <FormLabel>How can we help you?</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    height="75px"
                    fontSize="lg"
                  />
                </FormControl>

                <FormControl id="appointment_request" mt={5}>
                  <FormLabel>Request an Appointment</FormLabel>
                  <Textarea
                    name="appointment_request"
                    value={formData.appointment_request}
                    onChange={handleInputChange}
                    height="75px"
                    fontSize="lg"
                  />
                </FormControl>

                <Flex gap={6} direction={{ base: 'column', md: 'row' }} mt={5}>
                  <FormControl id="appointment-type" flex="1">
                    <FormLabel mb={2}>Appointment Type:</FormLabel>
                    <Flex gap={6} direction={{ base: 'column', sm: 'row' }}>
                      {[
                        {
                          value: 'telemedicine',
                          label: 'Telemedicine/Virtual',
                        },
                        { value: 'in-home', label: 'In Home' },
                      ].map((opt) => (
                        <Box key={opt.value} display="flex" alignItems="center">
                          <input
                            type="radio"
                            id={opt.value}
                            name="appointment_type"
                            value={opt.value}
                            checked={formData.appointment_type === opt.value}
                            onChange={handleInputChange}
                            style={{
                              marginRight: '8px',
                              width: '16px',
                              height: '16px',
                              backgroundColor: 'white',
                            }}
                          />
                          <FormLabel htmlFor={opt.value} mb={0}>
                            {opt.label}
                          </FormLabel>
                        </Box>
                      ))}
                    </Flex>
                  </FormControl>

                  <FormControl id="preferredCommunication" flex="1">
                    <FormLabel mb={2}>Preferred Communication:</FormLabel>
                    <Flex gap={6} direction={{ base: 'column', sm: 'row' }}>
                      {[
                        { value: 'email', label: 'Email' },
                        { value: 'phone', label: 'Phone' },
                      ].map((opt) => (
                        <Box key={opt.value} display="flex" alignItems="center">
                          <input
                            type="radio"
                            id={`communication-${opt.value}`}
                            name="preferredCommunication"
                            value={opt.value}
                            checked={
                              formData.preferredCommunication === opt.value
                            }
                            onChange={handleInputChange}
                            style={{
                              marginRight: '8px',
                              width: '16px',
                              height: '16px',
                              backgroundColor: 'white',
                            }}
                          />
                          <FormLabel
                            htmlFor={`communication-${opt.value}`}
                            mb={0}
                          >
                            {opt.label}
                          </FormLabel>
                        </Box>
                      ))}
                    </Flex>
                  </FormControl>
                </Flex>

                <FormControl mt={6}>
                  <Button
                    type="submit"
                    variant="solid"
                    bg="dark_green.500"
                    color="white"
                    borderRadius="0"
                    _hover={{ bg: 'black' }}
                    size="lg"
                    height="50px"
                    width="100%"
                    fontSize="lg"
                    // isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>

          {/* Image */}
          <Box
            width={{ base: '100%', md: '35%' }}
            mt={{ base: 6, md: 0 }}
            overflow="hidden"
            alignSelf="flex-start"
          >
            <Image
              src="/dogs_onfence.png"
              alt="Contact us image"
              w="100%"
              h="auto"
              objectFit="contain"
              objectPosition="center"
              borderRadius="0"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.1)"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
