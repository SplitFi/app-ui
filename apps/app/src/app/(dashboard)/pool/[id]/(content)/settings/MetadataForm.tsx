'use client';

import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import InputImage from '@/components/Form/InputImage';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';
import { Box, Button } from '@chakra-ui/react';
import { FileWithPreview } from '@/components/Form/types';

type PoolMetadataEditType = {
  name: string;
  description: string;
  image: FileWithPreview;
};

interface PoolMetadataFormProps {
  defaultValues: PoolMetadataEditType;
}

export default function PoolMetadataForm({
  defaultValues,
}: PoolMetadataFormProps) {
  return (
    <Form<PoolMetadataEditType> defaultValues={defaultValues}>
      <FormGroup description={`Modify the metadata of your split contract.`}>
        <InputImage id='image' label='Image' />

        <Input
          label='Name'
          id='name'
          validation={{ required: 'Please enter a name' }}
        />

        <TextArea label='Description' id='description' />
      </FormGroup>

      <Box>
        <Button w={'full'} type={'submit'}>
          Update Metadata
        </Button>
      </Box>
    </Form>
  );
}
