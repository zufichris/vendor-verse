import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LinkedinIcon, TwitterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{bio}</p>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <LinkedinIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <TwitterIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

