import { createClient } from '@sanity/client';

const saveOrder = async (orderData) => {
  try {
    const result = await client.create({
      _type: 'order',
      orderId: orderData.orderId,
      userDetails: orderData.userDetails,
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      status: 'pending',
    });
    console.log('Order saved:', result);
  } catch (error) {
    console.error('Error saving order:', error);
  }
};

const client = createClient({
  projectId: 'ojpizvx8', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true,
  token: 'sk7FV7kmAj3oT4S1NOOltT88tG4uKVHyV3EJgCmFWjjfPxocCfpAObaHw0dOovYFTOsmPFMsKOcnyK3cVNRMSQaqlZByPDvxtiegn9zmG6je0qBKw3RbzWaO6zqvS8a3pY6x446jZKnRNDSVITY4q4jeBcojgru5RPMvXtiQvdLZjZ8cbcal', // Replace with your Sanity API token
});

export default client;