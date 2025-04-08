"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { mockUsers } from "@/lib/mock-data"
import { Trophy, Medal, TrendingUp, Users, Calendar } from "lucide-react"

export default function LeaderboardPage() {
  const [timeFilter, setTimeFilter] = useState("all-time")

  // Sort users by score
  const sortedUsers = [...mockUsers].sort((a, b) => b.score - a.score)

  // Get top 3 users
  const topUsers = sortedUsers.slice(0, 3)

  // Get remaining users
  const remainingUsers = sortedUsers.slice(3)

  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-gray-500 dark:text-gray-400">See how you rank among the top coders in the community.</p>
        </div>

        {/* Time period filter */}
        <Tabs value={timeFilter} onValueChange={setTimeFilter} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all-time">All Time</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
          </TabsList>

          <TabsContent value="all-time" className="mt-0">
            {/* Top 3 users */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {topUsers.map((user, index) => (
                <Card
                  key={user.id}
                  className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${
                    index === 0
                      ? "border-yellow-500 dark:border-yellow-500/50"
                      : index === 1
                        ? "border-gray-400 dark:border-gray-400/50"
                        : "border-amber-700 dark:border-amber-700/50"
                  }`}
                >
                  <div
                    className={`h-2 ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"}`}
                  />
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        {index === 0 ? (
                          <Trophy className="h-5 w-5 text-yellow-500" />
                        ) : index === 1 ? (
                          <Medal className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Medal className="h-5 w-5 text-amber-700" />
                        )}
                        <CardTitle className="text-lg">#{index + 1}</CardTitle>
                      </div>
                      <Badge variant="outline">{user.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Avatar className="h-16 w-16 cursor-pointer">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <Avatar>
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{user.name}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{user.bio}</p>
                              <div className="flex items-center pt-2">
                                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-gray-500 dark:text-gray-400">Joined {user.joinDate}</span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                      <div className="flex flex-col">
                        <span className="font-bold">{user.name}</span>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span>{user.score} points</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{user.problemsSolved} problems solved</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Leaderboard table */}
            <Card>
              <CardHeader>
                <CardTitle>Leaderboard Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead className="text-right">Score</TableHead>
                      <TableHead className="text-right">Problems Solved</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {remainingUsers.map((user, index) => (
                      <TableRow key={user.id} className="group">
                        <TableCell className="font-medium">#{index + 4}</TableCell>
                        <TableCell>
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={user.avatar} alt={user.name} />
                                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium group-hover:text-blue-600 transition-colors">
                                  {user.name}
                                </span>
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="flex justify-between space-x-4">
                                <Avatar>
                                  <AvatarImage src={user.avatar} />
                                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">{user.name}</h4>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.bio}</p>
                                  <div className="flex items-center pt-2">
                                    <Calendar className="mr-2 h-4 w-4 opacity-70" />
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                      Joined {user.joinDate}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.level}</Badge>
                        </TableCell>
                        <TableCell className="text-right">{user.score}</TableCell>
                        <TableCell className="text-right">{user.problemsSolved}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead className="text-right">Weekly Score</TableHead>
                      <TableHead className="text-right">Problems Solved</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedUsers.slice(0, 10).map((user, index) => (
                      <TableRow key={user.id} className="group">
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            {index < 3 && (
                              <span className="mr-2">
                                {index === 0 ? (
                                  <Trophy className="h-4 w-4 text-yellow-500" />
                                ) : index === 1 ? (
                                  <Medal className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Medal className="h-4 w-4 text-amber-700" />
                                )}
                              </span>
                            )}
                            #{index + 1}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium group-hover:text-blue-600 transition-colors">{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.level}</Badge>
                        </TableCell>
                        <TableCell className="text-right">{Math.floor(user.score / 10)}</TableCell>
                        <TableCell className="text-right">{Math.floor(user.problemsSolved / 5)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead className="text-right">Monthly Score</TableHead>
                      <TableHead className="text-right">Problems Solved</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedUsers.slice(0, 10).map((user, index) => (
                      <TableRow key={user.id} className="group">
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            {index < 3 && (
                              <span className="mr-2">
                                {index === 0 ? (
                                  <Trophy className="h-4 w-4 text-yellow-500" />
                                ) : index === 1 ? (
                                  <Medal className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Medal className="h-4 w-4 text-amber-700" />
                                )}
                              </span>
                            )}
                            #{index + 1}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium group-hover:text-blue-600 transition-colors">{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.level}</Badge>
                        </TableCell>
                        <TableCell className="text-right">{Math.floor(user.score / 3)}</TableCell>
                        <TableCell className="text-right">{Math.floor(user.problemsSolved / 2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

