import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { InquiryForm } from './InquiryForm';
import type { ReactNode } from 'react';

export function InquiryDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle className="text-lg font-medium text-ice-text-primary">
            Secure Intake Form
          </DialogTitle>
          <p className="text-sm text-ice-text-tertiary">
            All information is kept strictly confidential.
          </p>
        </DialogHeader>
        <div className="px-2 pb-2">
          <InquiryForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
