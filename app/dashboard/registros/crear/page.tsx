import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Registros', href: '/dashboard/registros' },
                    {
                        label: 'Crear Registro',
                        href: '/dashboard/registros/crear',
                        active: true,
                    },
                ]}
            />
            <Form customers={customers} />
        </main>
    );
}