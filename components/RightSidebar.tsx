import Link from "next/link"
import Image from "next/image"
import BankCard from "./BankCard"


const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar relative">
        <section className="flex flex-col">
            <div className="profile-banner flex items-center">
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-bold text-blue-500">
                            {user.name[0]}
                        </span>
                    </div>

                    <div className="profile-details">
                        <h1 className="profile-name">
                            {user.name}
                        </h1>
                        <p className="profile-email">
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-banks relative">
            <div className="flex w-full justify-between">
                <h2 className="header-2">My Banks</h2>
                <Link href='/' className="flex gap-2">
                    <Image 
                        src='/icons/plus.svg'
                        alt='plus'
                        width={20}
                        height={20}
                    />
                    <h2 className="text-14 font-semibold text-gray-600">
                        Add Bank
                    </h2>
                </Link>
            </div>
            {banks?.length > 0 && (
                <div className="relative flex flex-col items-center justify-center gap-5">
                    <div className="relative z-10">
                        <BankCard 
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={`${user.name}`}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] && (
                        <div className="absolute right-5 top-12 z-20 w-[100%]">
                            <BankCard 
                                key={banks[1].$id}
                                account={banks[1]}
                                userName={`${user.name}`}
                                showBalance={false}
                            />
                        </div>
                    )}
                </div>
            )} 
        </section>
    </aside>
  )
}

export default RightSidebar